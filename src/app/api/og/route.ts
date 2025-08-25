// AI GENERATED

import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { getPostById } from '@/lib/api';

// Load Inter fonts from local public directory
async function getInterFont() {
  try {
    const fontDir = path.join(process.cwd(), 'public', 'inter');
    
    // Load the three font weights
    const interRegular = fs.readFileSync(path.join(fontDir, 'Inter-Regular.ttf'));
    const interMedium = fs.readFileSync(path.join(fontDir, 'Inter-Medium.ttf'));
    const interBold = fs.readFileSync(path.join(fontDir, 'Inter-Bold.ttf'));
    
    return [interRegular, interMedium, interBold];
  } catch (error) {
    console.error('Error loading fonts:', error);
    // Fallback: return empty array
    return [];
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return new Response('Missing slug parameter', { status: 400 });
    }

    const post = await getPostById(slug);
    if (!post) {
      return new Response(`Post not found: ${slug}`, { status: 404 });
    }

    // Load fonts
    const fonts = await getInterFont();

    const element = React.createElement(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: '#0A0A0A',
          padding: '80px',
        }
      },
      React.createElement(
        'div',
        {
          style: {
            fontSize: '60px',
            marginTop: '40px',
            fontFamily: fonts.length >= 3 ? 'Inter Bold' : 'Arial',
            fontWeight: 'bold',
            color: '#FAFAFA',
            lineHeight: 1.1,
          }
        },
        post.title
      ),
      React.createElement(
        'div',
        {
          style: {
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }
        },
        React.createElement(
          'div',
          {
            style: {
              fontSize: '24px',
              fontFamily: fonts.length >= 3 ? 'Inter Medium' : 'Arial',
              fontWeight: '600',
              color: '#FAFAFA',
              marginBottom: '8px',
            }
          },
          'brokenstack by Alok'
        ),
        React.createElement(
          'div',
          {
            style: {
              fontSize: '18px',
              fontFamily: fonts.length >= 3 ? 'Inter' : 'Arial',
              color: '#A3A3A3',
            }
          },
          'blog.alk.pw/'
        )
      )
    );

    const svg = await satori(
      element,
      {
        width: 1200,
        height: 630,
        fonts: fonts.length >= 3 ? [
          {
            name: 'Inter',
            data: fonts[0],
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter Medium',
            data: fonts[1],
            weight: 600,
            style: 'normal',
          },
          {
            name: 'Inter Bold',
            data: fonts[2],
            weight: 800,
            style: 'normal',
          },
        ] : [
          {
            name: 'Arial',
            data: await fetch('https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2').then(res => res.arrayBuffer()),
            weight: 400,
            style: 'normal',
          },
        ],
      }
    );

    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    return new NextResponse(png, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response(`Error generating image: ${error instanceof Error ? error.message : String(error)}`, { status: 500 });
  }
}
