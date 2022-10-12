import React from 'react'
import './blog.css'
import { blog1, blog2, blog3, blog4, blog5 } from './index'

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__part1">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className="blog__part2">
        <div className='blog__part2-card'>
          <div className='blog__part2-card_1'>
            <img src={blog2} alt="" />
          </div>

          <div className='blog__part2-card_2'>
            <p>July 26, 2022</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <div className='blog__part2-card_3'>
            <a href="#">Read Full Article</a>
          </div>
        </div>

        <div className='blog__part2-card'>
          <div className='blog__part2-card_1'>
            <img src={blog3} alt="" />
          </div>

          <div className='blog__part2-card_2'>
            <p>Aug 26, 2022</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <div className='blog__part2-card_3'>
            <a href="#">Read Full Article</a>
          </div>
        </div>

        <div className='blog__part2-card'>
          <div className='blog__part2-card_1'>
            <img src={blog4} alt="" />
          </div>

          <div className='blog__part2-card_2'>
            <p>Sep 26, 2022</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <div className='blog__part2-card_3'>
            <a href="#">Read Full Article</a>
          </div>
        </div>

        <div className='blog__part2-card'>
          <div className='blog__part2-card_1'>
            <img src={blog5} alt="" />
          </div>

          <div className='blog__part2-card_2'>
            <p>Oct 26, 2022</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <div className='blog__part2-card_3'>
            <a href="#">Read Full Article</a>
          </div>
        </div>

        <div className='blog__part2-card card-last'>
          <div className='blog__part2-card_1'>
            <img src={blog1} alt="" />
          </div>

          <div className='blog__part2-card_2'>
            <p>Sep 26, 2022</p>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
          </div>
          <div className='blog__part2-card_3'>
            <a href="#">Read Full Article</a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Blog