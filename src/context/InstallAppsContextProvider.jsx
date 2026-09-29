'use client';
import React, { useState } from 'react';
import { InstallAppsContext } from './InstallAppsCreateContext';

const InstallAppsContextProvider = ({children}) => {
    const[installNowApps, setinstallNowApps]= useState([]);
    const data = {
        installNowApps,
        setinstallNowApps
    }
    return <InstallAppsContext.Provider value={data}>{children}</InstallAppsContext.Provider>
};

export default InstallAppsContextProvider;