<inserted-from-canvas>
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toaster, toast } from "react-hot-toast";
import QRCode from "react-qr-code";

const gradients = {
  background: "bg-gradient-to-br from-[#0E0E0E] via-[#1A1A1A] to-[#0E0E0E]",
  neon: "bg-gradient-to-r from-[#00FF90] to-[#25D366] text-transparent bg-clip-text"
};

//... [truncated for brevity]
export default Home;