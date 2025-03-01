
import { METADATA } from "@/common/constants/metadata";
import Layout from "@/common/layouts/layout";
import Project from "@/modules/project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: `all Projects ${METADATA.exTitle}`,
};

export default async function ProjectPage() {
    return (
        <>
            <Layout>
                <Project />
            </Layout>
        </>
    );
}