import React from 'react';
import RefleksiMataKuliah from './RefleksiMataKuliah';
import { SEMESTER2_COURSES } from '../data/seminarContent';

export default function RefleksiSemester2() {
  return <RefleksiMataKuliah semester="2" courses={SEMESTER2_COURSES} />;
}
