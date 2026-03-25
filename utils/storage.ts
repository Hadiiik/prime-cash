// src/utils/storage.ts

export interface UserData {
  points: number;
  answeredPolls: string[]; // لتتبع استطلاعات الرأي التي تم الرد عليها
}

const STORAGE_KEY = 'tiktok_clone_user_data';

export const storage = {
  // الحصول على بيانات المستخدم
  getUserData: (): UserData => {
    if (typeof window === 'undefined') {
      return { points: 0, answeredPolls: [] };
    }
    
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return { points: 0, answeredPolls: [] };
  },

  // تحديث النقاط
  updatePoints: (additionalPoints: number): UserData => {
    const userData = storage.getUserData();
    const updatedData = {
      ...userData,
      points: userData.points + additionalPoints
    };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    }
    
    return updatedData;
  },

  // إضافة استطلاع تم الرد عليه
  addAnsweredPoll: (pollId: string): UserData => {
    const userData = storage.getUserData();
    if (!userData.answeredPolls.includes(pollId)) {
      const updatedData = {
        ...userData,
        answeredPolls: [...userData.answeredPolls, pollId]
      };
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      }
      
      return updatedData;
    }
    return userData;
  },

  // التحقق من إجابة استطلاع معين
  hasAnsweredPoll: (pollId: string): boolean => {
    const userData = storage.getUserData();
    return userData.answeredPolls.includes(pollId);
  },

  // إعادة تعيين البيانات
  resetData: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ points: 0, answeredPolls: [] }));
    }
  }
};