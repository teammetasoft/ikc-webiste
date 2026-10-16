'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    id: '01',
    title: 'LE MERIDIEN AL AQAH',
    category: 'HOTELS',
    clientName: 'Le Méridien / Marriott',
    location: 'Fujairah, UAE',
    year: '2024',
    capacity: '1,200 Meals/Day',
    image: '/ikc-images/cover_le_meridien_al_aqah.webp',
    specs: ['All-Day Dining Thermal Suite', 'Walk-In Cold Rooms', 'HACCP Ventilation'],
    highlight: '5-Star Beachfront Resort Suite',
  },
  {
    id: '02',
    title: 'VOLANTE',
    category: 'RESIDENTIAL',
    clientName: 'Volante Executive Tower',
    location: 'Business Bay, Dubai, UAE',
    year: '2024',
    capacity: '35 Floors Club & Residences',
    image: '/ikc-images/cover_volante.webp',
    specs: ['Private Club Cooking Line', 'Outdoor Stainless BBQ', 'Wine Refrigeration'],
    highlight: 'Luxury Tower Club & BBQ Suite',
  },

  {
    id: '03',
    title: 'ROBERTO’S',
    category: 'HOSPITALITY',
    clientName: 'Roberto’s Hospitality Group',
    location: 'DIFC, Dubai, UAE',
    year: '2024',
    capacity: '550 Covers/Day',
    image: '/ikc-images/cover_robertos.webp',
    specs: ['Executive Show Kitchen', 'Custom Wine Display Cellars', 'Bar Suite'],
    highlight: 'Award-Winning Fine Dining',
  },
  {
    id: '04',
    title: 'JW MARRIOTT MARQUIS',
    category: 'HOTELS',
    clientName: 'JW Marriott Group',
    location: 'Business Bay, Dubai, UAE',
    year: '2024',
    capacity: '1,500 Covers/Day',
    image: '/ikc-images/jw_marriott_building.jpg',
    specs: ['Heavy Modular Thermal Ranges', 'Dual-Temp Cold Rooms', 'AISI 304 Steel'],
    highlight: 'Iconic 5-Star Hotel Kitchen',
  },
  {
    id: '05',
    title: 'MEYDAN',
    category: 'HOTELS',
    clientName: 'Meydan Group',
    location: 'Nad Al Sheba, Dubai, UAE',
    year: '2024',
    capacity: '2,000 Meals/Day',
    image: '/ikc-images/cover_meydan.webp',
    specs: ['Banquet Thermal Lines', 'VIP Lounge Plating Counters', 'Blast Chillers'],
    highlight: 'Grandstand Banquet Facility',
  },
  {
    id: '06',
    title: 'LE ROYAL MERIDIEN BEACH RESORT AND SPA',
    category: 'HOTELS',
    clientName: 'Le Méridien / Marriott',
    location: 'JBR Dubai, UAE',
    year: '2024',
    capacity: '1,000 Meals/Day',
    image: '/ikc-images/cover_le_royal_meridien.webp',
    specs: ['Specialty Charcoal Grills', 'Show-Cooking Buffet', 'Induction Woks'],
    highlight: 'Luxury Beachfront Resort',
  },
  {
    id: '07',
    title: 'TORO TORO',
    category: 'HOSPITALITY',
    clientName: 'Grosvenor House Luxury Resort',
    location: 'Dubai Marina, UAE',
    year: '2025',
    capacity: '750 Covers/Day',
    image: '/ikc-images/cover_toro_toro.jpg',
    specs: ['Open Display Show Kitchen', 'Latin Charcoal Grill', 'Brass & Steel Finish'],
    highlight: 'Architectural Open Kitchen',
  },
  {
    id: '08',
    title: 'BICE BAHRAIN',
    category: 'HOSPITALITY',
    clientName: 'BiCE Hospitality Group',
    location: 'Moda Mall, Manama, Bahrain',
    year: '2024',
    capacity: '450 Covers/Day',
    image: '/ikc-images/cover_bice_bahrain.jpg',
    specs: ['Italian Thermal Suite', 'Custom Stainless Counter', 'HACCP Certified'],
    highlight: 'Luxury Fine Dining Suite',
  },
  {
    id: '09',
    title: 'ST REGIS MAURITIUS RESORT',
    category: 'HOTELS',
    clientName: 'Marriott International',
    location: 'Le Morne, Mauritius',
    year: '2024',
    capacity: '700 Guests/Day',
    image: '/ikc-images/cover_st_regis_mauritius.webp',
    specs: ['316 Marine Grade Steel', 'Tropicalized Cold Storage', 'UV Extraction'],
    highlight: 'Tropical Oceanfront Resort',
  },
  {
    id: '10',
    title: 'PIZZA EXPRESS DPC',
    category: 'HOSPITALITY',
    clientName: 'PizzaExpress International',
    location: 'Dubai Design District, UAE',
    year: '2025',
    capacity: '500 Covers/Day',
    image: '/ikc-images/cover_pizza_express_dpc.webp',
    specs: ['Commercial Gas Cooking Line', 'High-Output Pizza Ovens', 'Granite Dough Prep Counter'],
    highlight: 'Artisan Commercial Pizza Suite',
  },
  {
    id: '11',
    title: 'AL BARARI VILLA',
    category: 'RESIDENTIAL',
    clientName: 'Private Estate',
    location: 'Al Barari, Dubai, UAE',
    year: '2024',
    capacity: 'Private Estate Suite',
    image: '/ikc-images/cover_al_barari_villa.jpg',
    specs: ['Cantilevered Floating Island', 'Brushed Stainless Finish', 'Precision-Folded Edges'],
    highlight: 'Bespoke Floating Stainless Island',
  },
  {
    id: '12',
    title: 'JASMINE LEAF VILLA (AL BARARI)',
    category: 'RESIDENTIAL',
    clientName: 'Private Villa Estate',
    location: 'Al Barari, Dubai, UAE',
    year: '2025',
    capacity: 'Private Villa Suite',
    image: '/ikc-images/cover_jasmine_leaf_villa.jpg',
    specs: ['Commercial Service Kitchen', 'AISI 304 Storage Counters', 'Walk-In Cold Storage'],
    highlight: 'Luxury Villa Service Kitchen',
  },
  {
    id: '13',
    title: 'WINE CHILLER DISTRICT ONE',
    category: 'RESIDENTIAL',
    clientName: 'District One Villa',
    location: 'MBR City, Dubai, UAE',
    year: '2025',
    capacity: 'Bespoke Cellar Suite',
    image: '/ikc-images/cover_district_one_wine.jpg',
    specs: ['Bronze Glass Enclosure', 'Backlit Onyx Panels', 'Precision Climate Control'],
    highlight: 'Architectural Onyx Wine Cellar',
  },
  {
    id: '14',
    title: 'HARD ROCK CAFE MALDIVES (FOOD TRUCK)',
    category: 'HOSPITALITY',
    clientName: 'Hard Rock International',
    location: 'Emboodhoo Lagoon, Maldives',
    image: '/ikc-images/hard-rock-maldives-food-truck-01-exterior.jpg',
    specs: ['Jetty Mobile Food Truck', 'Professional Cooking Line', 'Tropicalized Refrigeration'],
    highlight: 'Jetty Mobile Food Truck Suite',
  },
  {
    id: '15',
    title: 'BAWE RESORT',
    category: 'HOTELS',
    clientName: 'Bawe Zanzibar Luxury Resort',
    location: 'Zanzibar, Tanzania',
    year: '2025',
    capacity: '350 Resort Guests',
    image: '/ikc-images/cover_bawe_resort.jpg',
    specs: ['Marine Anti-Corrosion', 'Off-Grid Cold Storage', 'Solar Thermal Line'],
    highlight: 'Luxury Island Resort Complex',
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== activeMobileIndex && newIndex >= 0 && newIndex < projects.length) {
      setActiveMobileIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveMobileIndex(index);
  };

  return (
    <section id="projects" className={styles.section}>
      {/* Background Image Layer (Desktop) */}
      <div className={styles.backgroundLayer}>
        {projects.map((project) => (
          <img
            key={`bg-${project.id}`}
            src={project.image}
            alt={project.title}
            className={`${styles.bgImage} ${hoveredProject === project.id ? styles.activeBg : ''}`}
          />
        ))}
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={styles.container}>
        
        {/* Top Header Row */}
        <div className={styles.topHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>
                SPACES THAT <br/>
                <span className={styles.titleGoldItalic}>PERFORM.</span>
              </h2>
              <div className={styles.titleLine}></div>
            </div>
          </div>
          
          <div className={styles.headerCenter}>
            <p className={styles.headerDesc}>
              From restaurants to resorts, we design and deliver world-class commercial kitchen spaces for the UAE's most ambitious hospitality brands.
            </p>
          </div>
        </div>

        {/* DESKTOP: Hover-Reveal Architectural List */}
        <div className={styles.desktopListContainer}>
          <div className={styles.projectListWrapper}>
            {projects.map((project) => (
              <Link
                href={`/projects#project-${project.id}`}
                key={project.id}
                className={`${styles.listItem} ${hoveredProject === project.id ? styles.itemHovered : ''} ${hoveredProject && hoveredProject !== project.id ? styles.itemFaded : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={styles.itemLeft}>
                  <span className={styles.itemNum}>{project.id}</span>
                  <h3 className={styles.itemTitle}>{project.title}</h3>
                </div>
                
                <div className={styles.itemRight}>
                  <div className={styles.metaInfo}>
                    <span className={styles.metaItem}><MapPin size={12} className={styles.metaIcon} /> {project.location}</span>
                    <span className={styles.metaItem}><Building2 size={12} className={styles.metaIcon} /> {project.clientName}</span>
                  </div>
                  <div className={styles.arrowCircle}>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE: Touch Swipeable Snap Gallery */}
        <div className={styles.mobileGalleryContainer}>
          <div 
            className={styles.mobileCarousel} 
            ref={carouselRef}
            onScroll={handleScroll}
          >
            {projects.map((project, idx) => (
              <div key={`mobile-${project.id}`} className={styles.mobileCard}>
                <div className={styles.mobileCardMedia}>
                  <img src={project.image} alt={project.title} className={styles.mobileCardImg} />
                  <div className={styles.mobileCardBadge}>
                    <span>{project.id}</span> / <span>06</span>
                  </div>
                  <div className={styles.mobileCardGradient}></div>
                </div>

                <div className={styles.mobileCardContent}>
                  <div className={styles.mobileMetaRow}>
                    <span className={styles.mobileCategory}>{project.category}</span>
                    <span className={styles.mobileLocation}>
                      <MapPin size={10} /> {project.location}
                    </span>
                  </div>

                  <h3 className={styles.mobileCardTitle}>{project.title}</h3>
                  <p className={styles.mobileClientName}>{project.clientName}</p>

                  <div className={styles.mobileCardFooter}>
                    <Link href={`/projects#project-${project.id}`} className={styles.mobileCardBtn}>
                      <span>VIEW SPECS</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Indicators & Arrows */}
          <div className={styles.mobileControls}>
            <div className={styles.mobileDots}>
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${activeMobileIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <div className={styles.mobileArrows}>
              <button 
                className={styles.arrowBtn}
                onClick={() => scrollToIndex(Math.max(0, activeMobileIndex - 1))}
                disabled={activeMobileIndex === 0}
                aria-label="Previous Project"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                className={styles.arrowBtn}
                onClick={() => scrollToIndex(Math.min(projects.length - 1, activeMobileIndex + 1))}
                disabled={activeMobileIndex === projects.length - 1}
                aria-label="Next Project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.sectionFooter}>
          <div className={styles.footerLeft}>
            <div className={styles.footerBars}>
              <span></span><span></span><span></span><span></span>
            </div>
            <span className={styles.footerText}>
              GLOBAL KITCHENS<br/>LOCAL IMPACT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
