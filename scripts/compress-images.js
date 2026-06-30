const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images')
const MAX_WIDTH = 1920
const JPEG_QUALITY = 80
const PNG_QUALITY = 80
const WEBP_QUALITY = 80

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const originalSize = fs.statSync(filePath).size
  const tmpPath = filePath + '.tmp'

  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()

    const needsResize = metadata.width && metadata.width > MAX_WIDTH

    let pipeline = needsResize
      ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : image

    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true }).toFile(tmpPath)
    } else if (ext === '.png') {
      await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toFile(tmpPath)
    } else if (ext === '.webp') {
      await pipeline.webp({ quality: WEBP_QUALITY }).toFile(tmpPath)
    } else {
      return null
    }

    const newSize = fs.statSync(tmpPath).size

    // Only replace if the compressed version is actually smaller
    if (newSize < originalSize) {
      fs.renameSync(tmpPath, filePath)
      return { originalSize, newSize, saved: originalSize - newSize }
    } else {
      fs.unlinkSync(tmpPath)
      return { originalSize, newSize: originalSize, saved: 0 }
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
    throw err
  }
}

async function run() {
  const files = fs.readdirSync(IMAGES_DIR).filter(f =>
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  )

  console.log(`\nFound ${files.length} images to process...\n`)

  let totalOriginal = 0
  let totalNew = 0
  let processed = 0
  let skipped = 0
  let errors = 0

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file)
    try {
      const result = await compressImage(filePath)
      if (!result) { skipped++; continue }

      totalOriginal += result.originalSize
      totalNew += result.newSize
      processed++

      const savedPct = ((result.saved / result.originalSize) * 100).toFixed(0)
      const tag = result.saved > 0 ? `saved ${savedPct}%` : 'already small'
      console.log(`  ✓ ${file.padEnd(60)} ${formatBytes(result.originalSize).padStart(8)} → ${formatBytes(result.newSize).padStart(8)}  (${tag})`)
    } catch (err) {
      errors++
      console.error(`  ✗ ${file} — ${err.message}`)
    }
  }

  const totalSaved = totalOriginal - totalNew
  const overallPct = totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : 0

  console.log('\n─────────────────────────────────────────────────────────────')
  console.log(`  Processed : ${processed} images`)
  if (skipped) console.log(`  Skipped   : ${skipped} (unsupported format)`)
  if (errors)  console.log(`  Errors    : ${errors}`)
  console.log(`  Before    : ${formatBytes(totalOriginal)}`)
  console.log(`  After     : ${formatBytes(totalNew)}`)
  console.log(`  Saved     : ${formatBytes(totalSaved)} (${overallPct}% reduction)`)
  console.log('─────────────────────────────────────────────────────────────\n')
  console.log('Done! Commit the compressed images with:')
  console.log('  git add public/images && git commit -m "chore: compress images for web"\n')
}

run().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
