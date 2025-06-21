import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

const SITE_URL = 'francanobr.com';

async function getPostMeta(imgCode: string) {
  try {
    const { title, date } = JSON.parse(atob(imgCode)); 
    return {
        title,
        date
    } as { title: string, date: string };
  } catch(e) {
    return {
        title: 'Hi, I’m Fran',
        date: ''
    };
  } 
}

async function loadGoogleFont (font: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)
 
  if (resource) {
    const response = await fetch(resource[1])
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }
 
  throw new Error('failed to load font data')
}

export const runtime = 'edge';

export async function GET(req: NextRequest, { params }: { params: { imgCode: string } }) {
  const { imgCode } = await params;
  const meta = await getPostMeta(imgCode);

  return new ImageResponse(
    (
      <div
        style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #0AA1ED, #7299E3, #C085CF, #DD78C5, #F767BB)',
            padding: 42,
            fontFamily: 'Archivo',
        }}
        >
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                background: '#E5E5E5',
                borderRadius: '52.5px',
                width: '100%',
                height: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#fff',
                    borderRadius: '52.5px',
                    width: '105px',
                    height: '100%',
                }}
            >
              <img
                src="https://www.francanobr.com/favicon.svg"
                style={{
                  width: '105px',
                  height: '105px',
                  padding: '20px'
                }}
              />
                
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '15px 34px',
                    width: '957px'
                }}
            >
              <div style={{ fontSize: 36, lineHeight: '42px', color: '#282A36', fontFamily: 'Archivo Narrow Bold' }}>
                {SITE_URL}
              </div>
              <div style={{ fontSize: 36, lineHeight: '42px', color: '#282A36', fontWeight: 'Archivo Narrow' }}>{meta.date}</div>

              <h1 style={{ fontSize: 74, margin: 0, marginTop: 64 }}>{meta.title}</h1>
            </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Archivo Narrow Bold',
          data: await loadGoogleFont('Archivo Narrow', 700, SITE_URL),
          style: 'normal',
          weight: 700
        },
        {
          name: 'Archivo Narrow',
          data: await loadGoogleFont('Archivo Narrow', 500, meta.date),
          style: 'normal',
          weight: 500
        },
        {
          name: 'Archivo',
          data: await loadGoogleFont('Archivo', 800, meta.title),
          style: 'normal',
          weight: 800,
        },
      ]
    }
  );
} 