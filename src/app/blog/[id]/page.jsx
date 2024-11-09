'use client'
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import { useEffect, useState, Fragment } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { fetchBlog } from '@/services/BlogServices';
import { blogs } from '@/utils/blogs';
import FooterDae from '@/components/Footer';
import ParserImgToImage from '@/components/Parser';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaArrowLeft, FaDownload } from "react-icons/fa";

const card = (item) => (
  <Fragment>
    <CardContent sx={{ padding: 0, bgcolor: '#F1F1F1' }}>
      <Typography variant="h5" component="div" className='title-medium'
        sx={{
          bgcolor: "#FABB00",
          height: '6rem',
          minHeight: 'fit-content',
          padding: '16px 24px 16px 24px'
        }}
      >
        {item.descarga_titulo}
      </Typography>
      <Typography variant="body2" className='body-large-regular '
        sx={{
          padding: '16px 24px 16px 24px',
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: 400,
        }}>
        {item.descarga_bajada}
      </Typography>
    </CardContent>
    <CardActions sx={{ backgroundColor: "#F1F1F1", justifyContent: 'flex-end' }}>
      {/* {console.log(item)} */}
      <a href={`/${item.descarga_url}`} >
        {/* <a href={process.env.NEXT_PUBLIC_BASE_IMG + item.url + process.env.NEXT_PUBLIC_KEY_IMG} > */}
        <button
          className='btn-0 ui-medium btn-descargas btn-0'>
          Descargar <FaDownload />
        </button>
      </a>
    </CardActions>
  </Fragment>
);

const Blogdetails = ({ params }) => {
  const [blog, setBlog] = useState(null)
  // const [blog, setBlog] = useState({})
  const isMediumSize = useMediaQuery('(min-width:768px)');
  const isLargeSiza = useMediaQuery('(min-width:1024px)');
  const isExtraLargeSiza = useMediaQuery('(min-width:1440px)');
  const router = useRouter()

  useEffect(() => {
    // const fetchData = async() => {
    // const data = await fetchBlog(params.id);

    // setBlog(bloques[0])
    // }
    // fetchData()
    if (blogs && !blog) {
      console.log(blogs[params.id])
      setBlog(blogs[params.id])
    }
  }, [params.id])

  return (
    <div>
      <>
        <div className="main-wrapper main-blog">
          {isMediumSize && <div style={{
            height: '620px',
            overflow: 'hidden',
          }}>
            {blog && <Image
              alt="#"
              height={0}
              width={0}
              sizes="100vw"
              priority
              src={`${process.env.NEXT_PUBLIC_BASE_IMG}${blog.blog_imagen}${process.env.NEXT_PUBLIC_KEY_IMG}`}
              style={{
                backgroundPosition: 'center',
                height: 'auto',
                width: '100%',
              }}
            />}

          </div>}
          {isMediumSize &&
            <button className=' mt-4 mb-5 lato-btn btn-back-desktop'
              onClick={() => router.back()}
            >
              <FaArrowLeft /> Volver
            </button>}
          <div className="page-wrapper" style={{ marginLeft: 'unset' }}>
            <div className="content p-0">

              {/* /Page Header */}
              <div className="row d-flex justify-content-center m-0">

                {/* CONTENIDO DEL BLOG */}
                <div className="col-12 " style={{ padding: isMediumSize ? 0 : '24px' }}>
                  <div className="blog-view" style={{ paddingLeft: isMediumSize && '96px' }}>
                    <div className="col-lg-12" style={{ padding: isMediumSize ? 0 : '32px 0 0 0', margin: isMediumSize ? '0' : '80px 0 0 0' }}>
                      <h3 className={isMediumSize ? "blog-title" : "blog-title-sm"} style={{ marginLeft: '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
                        {blog && blog.blog_titulo}
                      </h3>
                    </div>
                    <article className="blog blog-single-post d-flex justify-content-between flex-wrap" >

                      {/* TEXTO */}
                      <div className="header-3-regular col-lg-10 col-12" style={{ marginLeft: '0px' }}>
                        {/* {blog.texto} */}
                        {blog && <ParserImgToImage classType={isMediumSize ? "blog-content" : "blog-content-sm"} htmlContent={blog.blog_texto} />}
                        {/* </div> */}
                      </div>

                      {blog && blog?.video ? <div className="col-lg-12 col-12 d-flex flex-wrap" style={{ marginLeft: '0px', marginTop: isMediumSize ? '3rem' : 0, border: '1px solid red' }}>
                        {/* <div className="blog-content" style={{ marginBottom: isMediumSize ? 'auto' : '20px' }} >
                          <img src={blog.imagenes[1]} alt="" style={{ width: '600px' }} />
                        </div> */}

                        <iframe width={isMediumSize ? "60%" : "100%"} height="615" src={blog.blog_video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      </div>
                        : <></>
                      }
                    </article>

                    <div className="row d-flex my-4 p-0 ml-0" style={{ marginRight: isMediumSize ? '96px' : 0, borderTop: '1px solid grey', textAlign: 'center' }} >
                      {/* {console.log('leblog', blog.downloads)} */}
                      <div className="col-12">
                        <h3 className='header-2-bold mt-4' style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px' }}>Contenido descargable</h3>
                      </div>
                      <div className="row d-flex my-4 p-0 ml-0" style={{ marginRight: isMediumSize ? '96px' : 0, borderTop: '1px solid grey', textAlign: 'center', height: 'fit-content' }} >

                        {blog?.descargas && blog['descargas'].map((item, index) => (
                          <div className="col-12 col-lg-4 col-md-8 mb-3 mt-3 mt-md-5" key={index} style={{ margin: 'auto', flex: isExtraLargeSiza ? 'none' : '1' }}>
                            <Box sx={{ minWidth: 275, width: '100%', textAlign: 'left' }}>
                              <Card variant="outlined">{card(item)}</Card>
                            </Box>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-overlay" data-reff="" />
      </>
      <FooterDae isMediumSize={isMediumSize} />
    </div>
  )
}

export default Blogdetails
