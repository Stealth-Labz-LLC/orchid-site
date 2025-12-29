"use client";

import { useEffect } from "react";
import { initScrollTracking, initDeepScrollTracking } from "@/lib/trackmate";

export function TrackMateScroll() {
  useEffect(() => {
    // Initialize scroll tracking
    const cleanupScroll = initScrollTracking();
    const cleanupDeepScroll = initDeepScrollTracking();

    // Cleanup on unmount
    return () => {
      cleanupScroll();
      cleanupDeepScroll();
    };
  }, []);

  return null;
}
