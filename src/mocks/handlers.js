import { http, HttpResponse } from 'msw'
import { mockBlogs } from '../utils/mockupData'

export const handlers = [
  // Intercept fetchBlogs
  http.post('https://showbloglist-a6dzcva7fcfmfgdu.eastus-01.azurewebsites.net/main', () => {
    const flatBlogs = mockBlogs.flatMap(b => {
      if (b.descargas.length === 0) {
        return [{
          blog_id: b.blog_id,
          blog_titulo: b.blog_titulo,
          blog_bajada: b.blog_bajada,
          blog_imagen: b.blog_imagen,
          blog_video: b.blog_video,
          descarga_titulo: null,
          descarga_bajada: null,
          descarga_url: null
        }]
      }
      return b.descargas.map(d => ({
        blog_id: b.blog_id,
        blog_titulo: b.blog_titulo,
        blog_bajada: b.blog_bajada,
        blog_imagen: b.blog_imagen,
        blog_video: b.blog_video,
        descarga_titulo: d.descarga_titulo,
        descarga_bajada: d.descarga_bajada,
        descarga_url: d.descarga_url
      }))
    })

    return HttpResponse.json({ blogs: flatBlogs })
  }),

  // Intercept fetchBlog (by ID)
  http.post('https://showblogbyid-f4dxh4bvgydmdzh6.eastus-01.azurewebsites.net/main', async ({ request }) => {
    const { id } = await request.json()
    const blog = mockBlogs.find(b => b.blog_id === Number(id))
    return HttpResponse.json({ blogs: blog ? [blog] : [] })
  }),

  // Intercept sendMailTests
  http.post('https://calculatetestpoints-fpdthpb8d3fqh2a4.eastus-01.azurewebsites.net/main', () => {
    return HttpResponse.json({ message: 'Mail sent successfully (mock)' })
  }),
]
