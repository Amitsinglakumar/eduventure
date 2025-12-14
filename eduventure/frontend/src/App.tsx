import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";

// Pages (Lazy Loaded)
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GuestLogin = lazy(() => import("./pages/GuestLogin"));
const AuthView = lazy(() => import("./views/AuthView"));
const Kindergarten = lazy(() => import("./pages/Kindergarten"));
const SecondarySchool = lazy(() => import("./pages/SecondarySchool"));
const HigherEducation = lazy(() => import("./pages/HigherEducation"));
const CompetitiveExams = lazy(() => import("./pages/CompetitiveExams"));
const ARLearning = lazy(() => import("./pages/ARLearning"));
const CommunicationSkills = lazy(() => import("./pages/CommunicationSkills"));
const CareerRoadmap = lazy(() => import("./pages/CareerRoadmap"));
const EngineeringCSRoadmap = lazy(() => import("./pages/EngineeringCSRoadmap"));
const MedicalMbbsRoadmap = lazy(() => import("./pages/MedicalMbbsRoadmap"));
const CommerceBcomRoadmap = lazy(() => import("./pages/CommerceBcomRoadmap"));
const UpscRoadmap = lazy(() => import("./pages/UpscRoadmap"));
const GateRoadmap = lazy(() => import("./pages/GateRoadmap"));
const AiTutor = lazy(() => import("./pages/AiTutor"));
const KindergartenEnglish = lazy(() => import("./pages/KindergartenEnglish"));
const KindergartenHindi = lazy(() => import("./pages/KindergartenHindi"));
const KindergartenMath = lazy(() => import("./pages/KindergartenMath"));
const Class6 = lazy(() => import("./pages/Class6"));
const Class7 = lazy(() => import("./pages/Class7"));
const Class8 = lazy(() => import("./pages/Class8"));
const Class9 = lazy(() => import("./pages/Class9"));
const Class10 = lazy(() => import("./pages/Class10"));


const App: React.FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
            Loading EduVenture...
          </div>
        }
      >
        <Routes>
          {/* Redirect root to dashboard (MainLayout handles auth protection) */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Entry Routes */}
          <Route path="/login" element={<GuestLogin />} />
          <Route path="/auth" element={<AuthView />} />

          {/* Main App Layout */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Learning Sections */}
            <Route path="/ai-tutor" element={<AiTutor />} />
            <Route path="/kindergarten" element={<Kindergarten />} />
            <Route path="/kindergarten/english" element={<KindergartenEnglish />} />
            <Route path="/kindergarten/hindi" element={<KindergartenHindi />} />
            <Route path="/kindergarten/math" element={<KindergartenMath />} />
            <Route path="/class6" element={<Class6 />} />
            <Route path="/class7" element={<Class7 />} />
            <Route path="/class8" element={<Class8 />} />
            <Route path="/class9" element={<Class9 />} />
            <Route path="/class10" element={<Class10 />} />
            <Route path="/secondary" element={<SecondarySchool />} />
            <Route path="/higher-education" element={<HigherEducation />} />
            <Route path="/higher-education/engineering-cs" element={<EngineeringCSRoadmap />} />
            <Route path="/higher-education/medical-mbbs" element={<MedicalMbbsRoadmap />} />
            <Route path="/higher-education/commerce-bcom" element={<CommerceBcomRoadmap />} />
            <Route path="/competitive-exams" element={<CompetitiveExams />} />
            <Route path="/competitive-exams/upsc" element={<UpscRoadmap />} />
            <Route path="/competitive-exams/gate" element={<GateRoadmap />} />
            <Route path="/ar-learning" element={<ARLearning />} />
            <Route path="/communication" element={<CommunicationSkills />} />
            <Route path="/career-roadmap" element={<CareerRoadmap />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
                <a href="/" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Go Home
                </a>
              </div>
            </div>
          } />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
