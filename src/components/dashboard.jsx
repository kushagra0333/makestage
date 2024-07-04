import React, { useState } from 'react';
import { Table, Form, FormControl, Collapse } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Dropdown } from "react-bootstrap";
import Navigationbar from './header/Navbar'; // Assuming correct path
import Temporary_image from "../assets/images/CNC-3.webp"
import './dashboard.css';

const orders = [
  {
    quote_id: 'Q12345-34',
    subtotal: 799,
    production_speed: 'Standard',
    last_updated: '1 May 2020',
    led_time: '1 Jun 2020',
    status: 'Due',
    owner: '-',
    details: [
      { part_id: 1, thumbnail: [Temporary_image], name: 'Part 1', process: 'Process 1', material: 'Material 1', quantity: 2, price: 100 },
      { part_id: 2, thumbnail: [Temporary_image], name: 'Part 2', process: 'Process 2', material: 'Material 2', quantity: 3, price: 150 },
    ],
  }, {
    quote_id: 'Q12345-35',
    subtotal: 999,
    production_speed: 'Standard',
    last_updated: '1 april 2020',
    led_time: '1 Jun 2020',
    status: 'Due',
    owner: '-',
    details: [
      { part_id: 1, thumbnail: [Temporary_image], name: 'Part 1', process: 'Process 1', material: 'Material 1', quantity: 2, price: 100 },
      { part_id: 2, thumbnail: [Temporary_image], name: 'Part 2', process: 'Process 2', material: 'Material 2', quantity: 3, price: 150 },
      { part_id: 3, thumbnail: [Temporary_image], name: 'Part 2', process: 'Process 2', material: 'Material 2', quantity: 3, price: 150 },
    ],
  },
  // Add more orders here with details
];

const Dashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [expandedRowId, setexpandedRowId] = useState(null);

  const filteredOrder = orders.filter((order) =>
    order.quote_id.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleRowClick = (quote_id) => {
    setexpandedRowId(expandedRowId === quote_id ? null : quote_id);
  };

  return (
    <div className="dashboard-container bg-black">
      <Navigationbar />
      <Row className="New-Quote-Row">
        <Col className="New-Quote-Heading px-5">
          <h2 className='text-light'>Quotes</h2>
        </Col>
        <Col className="px-5">
          <a href="/order" className="btn btn-primary New-Quote-link">
            Start A New Quote
          </a>
        </Col>
      </Row>
      <Container className="order-table-wrapper">
        <Row className="table form">
          <Col>
            <Form className="d-flex m-2 px-2">
              <FormControl
                type="search"
                placeholder="Search..."
                className="search w-25"
                aria-label="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={expandedRowId ? "bi bi-chevron-up bg-black text-primary" : "bi bi-chevron-down bg-black text-primary"} viewBox="0 0 16 16">
                <path d="M8 10.293l-4.646-4.647a.5.5 0 0 1 .708-.708L8 8.293l4.646-4.646a.5.5 0 0 1 .708.708L8.707 10l4.647 4.646a.5.5 0 0 1-.708.708L8 10.707l-4.646 4.647a.5.5 0 0 1-.708-.708L7.293 10 2.646 5.354a.5.5 0 0 1 .708-.708L8 9.293z" />
              </svg>
            </Form>
          </Col>
          <Col md="auto">
            <Dropdown>
              <Dropdown.Toggle className=' filter-date rounded bg-black text-white border border-dark px-2 py-2 m-2 '>
                Filter By Date ...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>1 Day</Dropdown.Item>
                <Dropdown.Item>1 Weak</Dropdown.Item>
                <Dropdown.Item>1 Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs lg="2">
            <button className="btn btn-outline-light m-2 px-4 ">
              Export
            </button>
          </Col>
        </Row>
        <div >
          <Table className="dashboard-table main-table border border-dark" striped bordered hover>
            <thead>
              <tr>
                <th className='bg-black text-light '>Quote ID</th>
                <th className='bg-black text-light '>{" "}</th>
                <th className='bg-black text-light '>Subtotal</th>
                <th className='bg-black text-light '>Last Updated</th>
                <th className='bg-black text-light '>Led Time</th>
                <th className='bg-black text-light '>Production Speed</th>
                <th className='bg-black text-light '>Status</th>
                <th className='bg-black text-light '>Owner</th>
                <th className='bg-black text-light '>More</th>
                <th className='bg-black text-light '> {" "}</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrder.map((order) => (
                <React.Fragment key={order.quote_id}>
                  <tr onClick={() => handleRowClick(order.quote_id)}>
                    <td className='bg-black text-primary '>{order.quote_id}</td>
                    <td className='bg-black text-light '><img src={Temporary_image} height={60} width={40} alt="" /></td>
                    <td className='bg-black text-light '>{order.subtotal}</td>
                    <td className='bg-black text-light '>{order.last_updated}</td>
                    <td className='bg-black text-light '>{order.led_time}</td>
                    <td className='bg-black text-light '>{order.production_speed}</td>
                    <td className='bg-black text-light '>{order.status}</td>
                    <td className='bg-black text-light '>{order.owner}</td>
                    <td className='bg-black text-light '>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots-vertical"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      </svg>
                    </td>
                    <td className='bg-black text-light '> {expandedRowId ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                      </svg>
                    )}
                    </td>
                  </tr>
                  {expandedRowId === order.quote_id && (
                    <tr>
                      <td className='bg-black text-light px-4' colSpan={10}>
                        <Collapse in={expandedRowId === order.quote_id}>
                          <div >
                            <h6 className='m-2'>Clasification:None</h6>
                            <Table className=" border border-dark">
                              <thead>
                                <tr>
                                  <th className='bg-dark text-light '>Part ID</th>
                                  <th className='bg-dark text-light'>Thumbnail</th>
                                  <th className='bg-dark text-light'>Name</th>
                                  <th className='bg-dark text-light'>Process</th>
                                  <th className='bg-dark text-light'>Material</th>
                                  <th className='bg-dark text-light'>Quantity</th>
                                  <th className='bg-dark text-light'>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {order.details.map((detail, index) => (
                                  <tr key={index}>
                                    <td className='bg-black text-light'>{detail.part_id}</td>
                                    <td className='bg-black text-light'><img src={detail.thumbnail} height={60} width={40} alt="" /></td>
                                    <td className='bg-black text-light'>{detail.name}</td>
                                    <td className='bg-black text-light'>{detail.process}</td>
                                    <td className='bg-black text-light'>{detail.material}</td>
                                    <td className='bg-black text-light'>{detail.quantity}</td>
                                    <td className='bg-black text-light'>{detail.price}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </Collapse>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
