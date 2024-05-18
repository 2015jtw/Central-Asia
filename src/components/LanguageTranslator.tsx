"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition, useState } from "react";
import { useLocale } from "use-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = ({ className }: { className?: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    console.log(nextLocale);
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <Select onValueChange={onSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="de">German</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
