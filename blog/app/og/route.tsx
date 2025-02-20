import { ImageResponse } from 'next/og'

// Return a static OG image without using dynamic runtime data.
export function GET() {
  const title = 'Next.js Portfolio Starter'
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'left' }}>
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}