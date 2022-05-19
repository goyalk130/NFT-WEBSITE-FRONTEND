import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function StoryBlock() {

    useEffect(()=>{
        Aos.init({
            duration:200
        })
    })
  return (
    <div className='story-block'>
        <div className='story-block-container'>
            <div className='small-blogs'>
                <div className='blogs-wrapper'>
                    <div className='blogs-wrapper-heading'>
                        <h1>Blogs</h1>
                    </div>
                    <div className='blogs-container'>
                        <div className='new-blog-card'>
                            <img src='./media/6.jpeg'/>
                            <div className='blog-details'>
                                <h2>Blog heading</h2>
                                <p>omnis ut optio magni et ullam tenetur et explicabo molestiae. Sed rerum quia sit ullam Quis id facilis omnis ut optio magni et ullam tenetur et explicabo molestiae.</p>
                            </div>
                        </div>
                        <div className='new-blog-card'>
                            <img src='./media/6.jpeg'/>
                            <div className='blog-details'>
                                <h2>Blog heading</h2>
                                <p>omnis ut optio magni et ullam tenetur et explicabo molestiae. Sed rerum quia sit ullam Quis id facilis omnis ut optio magni et ullam tenetur et explicabo molestiae.</p>
                            </div>
                        </div>
                        <div className='new-blog-card'>
                            <img src='./media/6.jpeg'/>
                            <div className='blog-details'>
                                <h2>Blog heading</h2>
                                <p>omnis ut optio magni et ullam tenetur et explicabo molestiae. Sed rerum quia sit ullam Quis id facilis omnis ut optio magni et ullam tenetur et explicabo molestiae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blog-appear'>
                <div data-aos="fade-left" data-aos-duration="500" className='blog'>
                    <h1>Heading</h1>
                    <div className='divider-3'></div>
                    <p>
                    Lorem ipsum dolor sit amet. Sit odio quaerat sed officia consequatur a voluptas omnis ut optio magni et ullam tenetur et explicabo molestiae. Sed rerum quia sit ullam Quis id facilis assumenda. Eos minus quibusdam est explicabo vel dolor eius vel nisi ducimus et dolores corporis non quos quas quo accusantium impedit. Et quia numquam eos omnis omnis sed voluptatem voluptatem ea recusandae eligendi et facilis corporis ut officiis repellat id illum nihil.

                    Sed minima cupiditate aut ullam dolores eos sequi recusandae aut numquam nostrum et autem praesentium. Eos optio alias est voluptatum rerum est dolores quia eos voluptate tempore ut deserunt quisquam ut nulla nesciunt. Et magni laborum a asperiores pariatur quo sapiente repudiandae ut autem vitae eos atque laudantium sit totam eaque in iusto perferendis. Et nihil harum et dolor internos sed asperiores quas et omnis doloribus est magni neque ea voluptatibus quam ut provident alias.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
