// app/learn-more/page.jsx (Client Component)
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const LearnMorePageContent = () => {
  const searchParams = useSearchParams();
  const [pageData, setPageData] = useState({
    pageName: '',
    bio: '',
    learnMoreLink: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get data from URL parameters
    const pageName = searchParams.get('name') || 'اسم الصفحة';
    const bio = searchParams.get('bio') || 'لا يوجد وصف متاح حالياً';
    const learnMoreLink = searchParams.get('link') || '#';
    
    setPageData({
      pageName: decodeURIComponent(pageName),
      bio: decodeURIComponent(bio),
      learnMoreLink: decodeURIComponent(learnMoreLink)
    });
    setIsLoading(false);
  }, [searchParams]);

  const handleLearnMore = () => {
    if (pageData.learnMoreLink !== '#') {
      window.open(pageData.learnMoreLink, '_blank', 'noopener,noreferrer');
    } else {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    }
  };

  if (isLoading) {
    return (
      <>
        <style>{styles}</style>
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="learn-more-container">
        {/* Background decoration */}
        <div className="bg-decoration"></div>
        
        {/* Main Card */}
        <div className="main-card">
          <div className="card-content">
            {/* Animated dots */}
            <div className="animated-dots">
              <div className="dot dot-1"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-3"></div>
            </div>

            {/* Icon/Logo */}
            <div className="icon-wrapper">
              <svg className="bounce-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5"/>
                    <stop offset="1" stopColor="#4338ca"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Page Name */}
            <h1 className="page-name">{pageData.pageName}</h1>
            
            {/* Bio */}
            <p className="bio-text">{pageData.bio}</p>
            
            {/* Action Button */}
            <button className="learn-more-btn" onClick={handleLearnMore}>
              <span>معرفة المزيد</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Additional Info */}
            <div className="additional-info">
              <div className="info-item">
                <div className="pulse-dot"></div>
                <span>معلومات موثوقة</span>
              </div>
              <div className="info-item">
                <div className="pulse-dot"></div>
                <span>تحديثات مستمرة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Notification */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>⚠️ الرابط غير متوفر حالياً</p>
            </div>
          </div>
      )}
      </div>
    </>
  );
};

const LearnMorePage = () => (
  <Suspense
    fallback={
      <>
        <style>{styles}</style>
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      </>
    }
  >
    <LearnMorePageContent />
  </Suspense>
);

const styles = `
  :root {
    /* Colors */
    --primary-start: #4f46e5;
    --primary-end: #4338ca;
    --secondary: #f59e0b;
    --background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
    --card: #ffffff;
    --text: #1f2937;
    --text-secondary: #6b7280;
    --border: #e5e7eb;
    
    /* Shadows */
    --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Border Radius */
    --radius: 1rem;
    
    /* Transitions */
    --transition-ease: 0.3s ease;
    --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow-x: hidden;
  }

  /* Loading Spinner */
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: var(--background);
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid var(--border);
    border-top-color: var(--primary-start);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Main Container */
  .learn-more-container {
    min-height: 100vh;
    background: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  /* Background Decoration */
  .bg-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  .bg-decoration::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: radial-gradient(circle at 80% 30%, rgba(245, 158, 11, 0.03) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-5%, -5%); }
  }

  /* Main Card */
  .main-card {
    max-width: 600px;
    width: 100%;
    background: var(--card);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: var(--transition-ease);
    position: relative;
    z-index: 1;
    animation: modalIn 0.5s var(--transition-bounce);
  }

  .main-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }

  .card-content {
    padding: 3rem 2rem;
    position: relative;
    text-align: center;
  }

  /* Animated Dots */
  .animated-dots {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-start);
    opacity: 0.6;
  }

  .dot-1 {
    animation: flyToTop 2s ease-in-out infinite;
  }

  .dot-2 {
    animation: flyToTop 2s ease-in-out infinite 0.4s;
  }

  .dot-3 {
    animation: flyToTop 2s ease-in-out infinite 0.8s;
  }

  @keyframes flyToTop {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }

  /* Icon Wrapper */
  .icon-wrapper {
    margin-bottom: 1.5rem;
    display: inline-block;
  }

  .bounce-icon {
    filter: drop-shadow(0 4px 6px rgba(79, 70, 229, 0.2));
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  /* Page Name */
  .page-name {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-start), var(--primary-end));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  /* Bio Text */
  .bio-text {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  /* Learn More Button */
  .learn-more-btn {
    background: linear-gradient(135deg, var(--primary-start), var(--primary-end));
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: var(--transition-ease);
    margin-bottom: 2rem;
    font-family: 'Cairo', sans-serif;
  }

  .learn-more-btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }

  .learn-more-btn:active {
    transform: translateY(0);
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  .learn-more-btn:hover .btn-icon {
    transform: translateX(4px);
  }

  /* Additional Info */
  .additional-info {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    background: var(--secondary);
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
  }

  /* Modal Notification */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: modalIn 0.3s var(--transition-bounce);
  }

  .modal-content {
    background: var(--card);
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    text-align: center;
    animation: modalIn 0.3s var(--transition-bounce);
  }

  .modal-content p {
    color: var(--text);
    font-weight: 500;
  }

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .card-content {
      padding: 2rem 1.5rem;
    }
    
    .page-name {
      font-size: 2rem;
    }
    
    .bio-text {
      font-size: 1rem;
    }
    
    .additional-info {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    
    .learn-more-btn {
      padding: 0.875rem 1.5rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .page-name {
      font-size: 1.75rem;
    }
    
    .card-content {
      padding: 1.5rem;
    }
  }
`;

export default LearnMorePage;