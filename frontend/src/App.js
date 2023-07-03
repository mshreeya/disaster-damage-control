import { Route, Routes, useLocation, Outlet, Navigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useContext } from 'react';


import Home from "./components/Home";

import NavBar from "./components/navbar";

import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import HomePage from './routes/home';
import DisastersPage from './routes/disasters';
import TopLogo from './components/topLogo';
import DonationsPage from './routes/donations';
import PanelPage from './routes/panel';

const PageLayout = ({ children }) => children;

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
};

const AnimationLayout = () => {
    const { pathname } = useLocation();
    return (
        <PageLayout>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet />
            </motion.div>
        </PageLayout>
    );
};

export default function App() {

    useEffect(() => {
        const onPageLoad = () => {
            setTimeout(() => {
                document.getElementById("loader_block").style.opacity = 0;
                setTimeout(() => {
                    document.getElementById("loader_block").style.display = "none";
                }, 310);
            }, 200);
        };
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <UserAuthContextProvider>
            <div className="App">
                <NavBar />
                <TopLogo />
                <Routes>
                    <Route element={<AnimationLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/disasters" element={<DisastersPage />} />
                        <Route path="/aid/:disaster/:pincode" element={<DonationsPage />} />
                        <Route path="/panel" element={
                            <ProtectedRoute>
                                <PanelPage />
                            </ProtectedRoute>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </div>
        </UserAuthContextProvider>
    );
}
