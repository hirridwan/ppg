import React from 'react';
import RefleksiMataKuliah from './RefleksiMataKuliah';
import { SEMESTER1_COURSES } from '../data/seminarContent';

export default function RefleksiSemester1() {
  return <RefleksiMataKuliah semester="1" courses={SEMESTER1_COURSES} />;
}
