export const videos = [
  {
    id: '1',
    youtubeUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    title: 'الفيديو الأول',
    poll: {
      id: 'poll1',
      question: 'ما رأيك في هذا الفيديو؟',
      options: ['ممتاز', 'جيد', 'متوسط', 'ضعيف']
    }
  },
  {
    id: '2',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'الفيديو الثاني',
    poll: null
  },
  {
    id: '3',
    youtubeUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    title: 'الفيديو الثالث',
    poll: {
      id: 'poll3',
      question: 'هل ستعيد مشاهدة هذا الفيديو؟',
      options: ['نعم بالتأكيد', 'ربما', 'لا']
    }
  }
];


export const bottomNavItems = [
  { id: 'home', label: 'الرئيسية', icon: 'Home', path: '/' },
  { id: 'points', label: 'النقاط', icon: 'Coin', path: '/points' },
  { id: 'profile', label: 'الحساب', icon: 'User', path: '/profile' }
];