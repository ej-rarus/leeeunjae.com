import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '이은재 닷컴 - AX/AI 전문가'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-2px',
            }}
          >
            이은재
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 500,
            }}
          >
            AX/AI 전문가 · 스토리텔링 테크놀로지스트
          </div>
          <div
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.7)',
              marginTop: '8px',
            }}
          >
            leeeunjae.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
