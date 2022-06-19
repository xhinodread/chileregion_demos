

import Link from "next/link";
import Router from "next/router";

export default () => (
<>
  <div className="slider justify-content-center mx-auto">
    <Link href="#slide-1" scroll={false}>
      <a>1</a>
    </Link>
    <Link href="#slide-2" scroll={false}>
      <a>2</a>
    </Link>
    <Link href="#slide-3" scroll={false}>
      <a>3</a>
    </Link>
    <Link href="#slide-4" scroll={false}>
      <a>4</a>
    </Link>
    <Link href="#slide-5" scroll={false}>
      <a>5</a>
    </Link>

    <div className="slides">
      <div name="slide-1" id="slide-1">
        1
      </div>
      <div name="slide-2" id="slide-2">
        2
      </div>
      <div id="slide-3">3</div>
      <div id="slide-4">4</div>
      <div id="slide-5">5</div>
    </div>
  </div>
  <style jsx>{`
/***    * {
      box-sizing: border-box;
    }

    p {
      font-size: 40px;
    }
****/
    .slider {
      width: 300px;
      text-align: center;
      overflow: hidden;
    }

    .slides {
      display: flex;

      overflow-x: auto;
      scroll-snap-type: x mandatory;

      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;

      /*
      scroll-snap-points-x: repeat(300px);
      scroll-snap-type: mandatory;
      */
    }
    .slides::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .slides::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 10px;
    }
    .slides::-webkit-scrollbar-track {
      background: transparent;
    }
    .slides > div {
      scroll-snap-align: start;
      flex-shrink: 0;
      width: 300px;
      height: 300px;
      margin-right: 50px;
      border-radius: 10px;
      background: #eee;
      transform-origin: center center;
      transform: scale(1);
      transition: transform 0.5s;
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 100px;
    }
    .slides > div:target {
      /*   transform: scale(0.8); */
    }
    .author-info {
      background: rgba(0, 0, 0, 0.75);
      color: white;
      padding: 0.75rem;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      margin: 0;
    }
    .author-info a {
      color: white;
    }
    img {
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .slider > a {
      display: inline-flex;
      width: 1.5rem;
      height: 1.5rem;
      background: white;
      text-decoration: none;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: 0 0 0.5rem 0;
      position: relative;
    }
    .slider > a:active {
      top: 1px;
    }
    .slider > a:focus {
      background: #000;
    }

    /* Don't need button navigation */
    @supports (scroll-snap-type) {
      .slider > a {
        display: block;
      }
    }
    /*****
    html,
    body {
      height: 100%;
      overflow: hidden;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(#74abe2, #5563de);
      font-family: "Ropa Sans", sans-serif;
    }
    *****/
  `}</style>
</>
);
