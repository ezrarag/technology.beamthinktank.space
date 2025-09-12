import React from 'react';
import './unframer-polyfill'; // Import polyfill first
import './framer/styles.css';
import './test-polyfill'; // Test polyfill

// Import all the Framer components
import HeroSectionFramerComponent from './framer/hero-section';
import HeaderHeroSectionFramerComponent from './framer/header-hero-section';
import IconsServicesFramerComponent from './framer/icons-services';
import CardCaseStudySectionFramerComponent from './framer/card-case-study-section';
import AvatarCardMagicalTeamFramerComponent from './framer/avatar-card-magical-team';
import FAQCardAboutHomepageFramerComponent from './framer/f-a-q-card-about-homepage';
import ButtonsSecondaryFramerComponent from './framer/buttons-secondary';
import ButtonsPrimaryFramerComponent from './framer/buttons-primary';
import IconBundlesSectionFramerComponent from './framer/icon-bundles-section';
import BadgeBundlesSectionFramerComponent from './framer/badge-bundles-section';
import FooterSectionFooterFramerComponent from './framer/footer-section-footer';
import OsakaLogoFramerComponent from './framer/osaka-logo';
import ButtonsHeaderNavigationFramerComponent from './framer/buttons-header-navigation';
import MadeByLoveFooterFramerComponent from './framer/made-by-love-footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: 'white' }}>
      {/* Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '2rem 4rem',
        borderBottom: '1px solid #f0f0f0'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <OsakaLogoFramerComponent.Responsive />
          <span style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333' }}>
            Osaka Agency
          </span>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <ButtonsHeaderNavigationFramerComponent.Responsive
            label={"Homepage"}
            addURL={"/"}
            showLeftIcon={false}
            showRightIcon={false}
          />
          <ButtonsHeaderNavigationFramerComponent.Responsive
            label={"About"}
            addURL={"/about"}
            showLeftIcon={false}
            showRightIcon={false}
          />
          <ButtonsHeaderNavigationFramerComponent.Responsive
            label={"Contact"}
            addURL={"/contact"}
            showLeftIcon={false}
            showRightIcon={false}
          />
          <ButtonsHeaderNavigationFramerComponent.Responsive
            label={"Our Projects"}
            addURL={"/our-projects"}
            showLeftIcon={false}
            showRightIcon={false}
          />
        </nav>

        {/* Buy Template Button */}
        <ButtonsPrimaryFramerComponent.Responsive
          link={"/buy-template"}
          label={"Buy Template"}
          showLeftIcon={false}
          showRightIcon={true}
        />
      </header>

      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem'
      }}>
        {/* Badge */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          fontSize: '0.875rem',
          color: '#666',
          marginBottom: '1rem'
        }}>
          <span>✦</span>
          <span>A Multidisciplinary Agency</span>
        </div>

        {/* Main Headline */}
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '700', 
            lineHeight: '1.1',
            marginBottom: '1rem',
            color: '#333'
          }}>
            <span style={{ color: '#999' }}>Incredible</span><br />
            <span style={{ color: '#333' }}>visual identities</span><br />
            <span style={{ color: '#999' }}>we've made it.</span>
          </h1>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: '2rem' }}>
          <ButtonsSecondaryFramerComponent.Responsive
            label={"Book a schedule"}
            addURL={"/contact"}
            showLeftIcon={false}
            showRightIcon={true}
          />
        </div>
      </section>

      {/* Our Projects Section */}
      <section style={{ 
        padding: '6rem 4rem',
        backgroundColor: '#fafafa'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Section Title */}
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: '#333',
            marginBottom: '2rem'
          }}>
            Our Projects
          </h2>
          
          {/* Projects Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            width: '100%'
          }}>
            <CardCaseStudySectionFramerComponent.Responsive
              link={"/our-projects/intoauth"}
              title={"IntoAuth - SaaS Framer Template"}
            />
            <CardCaseStudySectionFramerComponent.Responsive
              link={"/our-projects/hirex-product"}
              title={"Hirex Product"}
            />
            <CardCaseStudySectionFramerComponent.Responsive
              link={"/our-projects/theengineers"}
              title={"TheEngineers"}
            />
            <CardCaseStudySectionFramerComponent.Responsive
              link={"/our-projects/workos"}
              title={"WorkOS"}
            />
            <CardCaseStudySectionFramerComponent.Responsive
              link={"/our-projects/hirex-landing"}
              title={"Hirex Landing"}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '4rem 4rem 2rem',
        backgroundColor: '#333',
        color: 'white'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              General Inquiries
            </h3>
            <p style={{ color: '#ccc', marginBottom: '1rem' }}>
              hello@osakaagency.com
            </p>
            <ButtonsPrimaryFramerComponent.Responsive
              link={"/contact"}
              label={"Contact"}
              showLeftIcon={false}
              showRightIcon={true}
            />
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              +90 545 00 00 00
            </p>
            <ButtonsPrimaryFramerComponent.Responsive
              link={"/contact"}
              label={"Contact Us"}
              showLeftIcon={false}
              showRightIcon={true}
            />
          </div>
        </div>
        
        {/* Made by love footer */}
        <div style={{ 
          borderTop: '1px solid #555', 
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <MadeByLoveFooterFramerComponent.Responsive />
        </div>
      </footer>
    </div>
  );
}

export default App;
