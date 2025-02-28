
import { METADATA } from "@/common/constants/metadata";
import Layout from "@/common/layouts/layout";
import Home from "@/modules/home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Home Portfolio ${METADATA.exTitle}`,
};

export default async function HomePage() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}