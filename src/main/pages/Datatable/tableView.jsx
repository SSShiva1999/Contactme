import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ContactData = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch contact data from the backend
    const fetchContactData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/contact-data');
        const result = await response.json();
        
        if (response.ok) {
          setContactData(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError('Error fetching data.');
        console.error('Error fetching contact data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Contact Messages</h2>
      <TableContainer component={Paper}>
        <Table aria-label="contact data table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="center"><strong>Email</strong></TableCell>
              <TableCell align="center"><strong>Message</strong></TableCell>
              <TableCell align="center"><strong>Query Type</strong></TableCell>
              <TableCell align="center"><strong>Company</strong></TableCell>
              <TableCell align="center"><strong>Mobile</strong></TableCell>
              <TableCell align="center"><strong>Resume Visible</strong></TableCell>
              <TableCell align="center"><strong>Timestamp</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactData.map((message, index) => (
              <TableRow key={index}>
                <TableCell>{message.name}</TableCell>
                <TableCell align="center">{message.email}</TableCell>
                <TableCell align="center">{message.message}</TableCell>
                <TableCell align="center">{message.queryType}</TableCell>
                <TableCell align="center">{message.companyName}</TableCell>
                <TableCell align="center">{message.mobileNumber}</TableCell>
                <TableCell align="center">{message.resumeVisible ? 'Yes' : 'No'}</TableCell>
                <TableCell align="center">{new Date(message.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactData;
