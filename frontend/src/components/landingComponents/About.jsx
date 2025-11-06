import React from 'react';
import NavBar from './NavBar';
import { FaBuilding, FaUsers, FaHandshake, FaBullseye, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { MdOutlineHomeWork, MdOutlineSupportAgent } from 'react-icons/md';

const About = () => {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#ff5a3c', fontWeight: '900', textTransform: 'uppercase' }}>About Us</h1>
            <p style={{ marginTop: '0.5rem', fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: '800', letterSpacing: '-0.025em', color: '#111827' }}>
              Your Trusted Partner in Property Management
            </p>
            <p style={{ marginTop: '1rem', maxWidth: '672px', fontSize: '1.25rem', lineHeight: '1.75rem', color: '#6b7280', margin: '0 auto' }}>
              We are dedicated to simplifying property management for owners and providing exceptional living experiences for tenants.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <dl style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
              {/* Our Mission */}
              <div style={{ position: 'relative', width: 'calc(50% - 1.25rem)' }}> {/* Adjusted width for two columns with gap */}
                <dt>
                  <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.375rem', backgroundColor: '#ff5a3c', color: '#fff' }}>
                    <FaBullseye style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
                  </div>
                  <p style={{ marginLeft: '4rem', fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500', color: '#111827' }}>Our Mission</p>
                </dt>
                <dd style={{ marginTop: '0.5rem', marginLeft: '4rem', fontSize: '1rem', lineHeight: '1.5rem', color: '#6b7280' }}>
                  To provide seamless, efficient, and transparent property management solutions that maximize value for property owners and ensure comfortable, secure homes for residents. We strive to build lasting relationships based on trust and exceptional service.
                </dd>
              </div>

              {/* What We Offer */}
              <div style={{ position: 'relative', width: 'calc(50% - 1.25rem)' }}>
                <dt>
                  <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.375rem', backgroundColor: '#ff5a3c', color: '#fff' }}>
                    <MdOutlineHomeWork style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
                  </div>
                  <p style={{ marginLeft: '4rem', fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500', color: '#111827' }}>Comprehensive Services</p>
                </dt>
                <dd style={{ marginTop: '0.5rem', marginLeft: '4rem', fontSize: '1rem', lineHeight: '1.5rem', color: '#6b7280' }}>
                  From tenant screening and lease management to maintenance coordination and financial reporting, we handle every aspect of property management. Our services are designed to be hassle-free for owners and responsive for tenants.
                </dd>
              </div>

              {/* Why Choose Us */}
              <div style={{ position: 'relative', width: 'calc(50% - 1.25rem)' }}>
                <dt>
                  <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.375rem', backgroundColor: '#ff5a3c', color: '#fff' }}>
                    <FaHandshake style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
                  </div>
                  <p style={{ marginLeft: '4rem', fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500', color: '#111827' }}>Experienced Team</p>
                </dt>
                <dd style={{ marginTop: '0.5rem', marginLeft: '4rem', fontSize: '1rem', lineHeight: '1.5rem', color: '#6b7280' }}>
                  Our team comprises seasoned professionals with extensive knowledge of the real estate market and property management best practices. We are committed to delivering top-tier service and expert guidance.
                </dd>
              </div>

              {/* Transparency */}
              <div style={{ position: 'relative', width: 'calc(50% - 1.25rem)' }}>
                <dt>
                  <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.375rem', backgroundColor: '#ff5a3c', color: '#fff' }}>
                    <FaShieldAlt style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
                  </div>
                  <p style={{ marginLeft: '4rem', fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500', color: '#111827' }}>Transparency & Trust</p>
                </dt>
                <dd style={{ marginTop: '0.5rem', marginLeft: '4rem', fontSize: '1rem', lineHeight: '1.5rem', color: '#6b7280' }}>
                  We believe in complete transparency. Our clients have access to detailed reports and clear communication channels, ensuring they are always informed about their property's performance.
                </dd>
              </div>

              {/* Technology Driven */}
              <div style={{ position: 'relative', width: 'calc(50% - 1.25rem)' }}>
                <dt>
                  <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.375rem', backgroundColor: '#ff5a3c', color: '#fff' }}>
                    <FaChartLine style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
                  </div>
                  <p style={{ marginLeft: '4rem', fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500', color: '#111827' }}>Technology-Driven Solutions</p>
                </dt>
                <dd style={{ marginTop: '0.5rem', marginLeft: '4rem', fontSize: '1rem', lineHeight: '1.5rem', color: '#6b7280' }}>
                  Leveraging the latest property management software, we streamline operations, enhance efficiency, and provide convenient online portals for both owners and tenants.
                </dd>
              </div>

              {/* Customer Support */}
              <div style={{ position: 'relative', width: 'calc(50% - 1.25rem)' }}>
                <dt>
                  <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.375rem', backgroundColor: '#ff5a3c', color: '#fff' }}>
                    <MdOutlineSupportAgent style={{ height: '1.5rem', width: '1.5rem' }} aria-hidden="true" />
                  </div>
                  <p style={{ marginLeft: '4rem', fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500', color: '#111827' }}>Dedicated Support</p>
                </dt>
                <dd style={{ marginTop: '0.5rem', marginLeft: '4rem', fontSize: '1rem', lineHeight: '1.5rem', color: '#6b7280' }}>
                  Our dedicated support team is always ready to assist with any queries or concerns, ensuring a smooth and pleasant experience for everyone involved.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
