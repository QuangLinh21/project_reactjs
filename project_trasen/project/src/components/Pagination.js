import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    return (
        <ul className="pagination d-flex justify-content-center mt-5">
        <li className="page-item">
          <a
            className="page-link text-dark"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    )
  }
}
