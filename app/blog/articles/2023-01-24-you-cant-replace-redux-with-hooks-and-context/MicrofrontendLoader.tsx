"use client";

import React, {use} from "react";
import ReactDOM, {createPortal} from "react-dom";
import {init, loadRemote} from "@module-federation/enhanced/runtime";

const articlePromise = loadArticle();

export default function MicrofrontendLoader() {
  const microfrontend = use(articlePromise);

  return createPortal(microfrontend(), document.querySelector("#bleedthrough-article")!);
}

async function loadArticle() {
  init({
    name: "francanobr_blog",
    remotes: [
      {
        name: "youcantreplacereduxwithcontext",
        entry: "https://youcannotreplacereduxwithcontext.netlify.app/mf-manifest.json",
        // entry: "http://localhost:9000/mf-manifest.json",
      },
    ],
    shared: {
      react: {
        lib: () => React,
        version: '19.1.0',
        shareConfig: {
          singleton: true,
          requiredVersion: '^19.1.0',
        },
      },
      'react-dom': {
        lib: () => ReactDOM,
        version: '19.1.0',
        shareConfig: {
          singleton: true,
          requiredVersion: '^19.1.0',
        },
      },
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const remote: any = await loadRemote("youcantreplacereduxwithcontext");

  return remote.default;
}
