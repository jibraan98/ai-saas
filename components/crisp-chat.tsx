'use client'

import { useEffect } from "react"
import {Crisp} from 'crisp-sdk-web';

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("8c67bd97-f991-4332-89d6-7e6b32becfbd")
    },[])

    return null;
}