import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import {
  ABOUT_TAB,
  ENROLL_SUCCESS_MESSAGE,
  LESSONS_TAB,
  SHARE_SUCCESS_MESSAGE,
} from '../components/course-details/courseDetailsCopy';

const copyCourseLink = (url) => navigator.clipboard.writeText(url);

const notifyShareSuccess = () => {
  toast.success(SHARE_SUCCESS_MESSAGE);
};

const confirmEnrollment = () => {
  toast.success(ENROLL_SUCCESS_MESSAGE);
};

export const useCourseDetails = () => {
  const [tab, setTab] = useState(ABOUT_TAB);

  const handleTabSelect = useCallback((nextTab) => {
    setTab(nextTab);
  }, []);

  const handlePlayPreview = useCallback(() => {
    setTab(LESSONS_TAB);
  }, []);

  const handleEnroll = useCallback(() => {
    confirmEnrollment();
  }, []);

  const handleShare = useCallback(() => {
    copyCourseLink(window.location.href).then(notifyShareSuccess);
  }, []);

  return {
    tab,
    handleTabSelect,
    handlePlayPreview,
    handleEnroll,
    handleShare,
  };
};
