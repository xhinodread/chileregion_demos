import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navvar from '../components/navvar'

import React, { useEffect } from 'react';

export default function FirstPost() {


  return (
      <Layout>
      <Navvar/>

      <Head>
        <title>First Post</title>
      </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a className={"btn btn-outline-success"}>Back to home</a>
          </Link>
        </h2>
        <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button>
        <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
  <button className="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
  <div className="dropdown m-3">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      id="dropdownMenuButton1"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <a className="dropdown-item" href="#">
          Option 1
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Option 2
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Option 3
        </a>
      </li>
    </ul>
  </div>


<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      </Layout>
    )
}
