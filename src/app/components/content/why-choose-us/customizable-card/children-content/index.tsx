"use client";

import { Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import hygraphLogo from "@/assets/icons/hygraph.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { customizableContentOptions } from "@/utils/customizable-content-options";

const scheduleMap: Record<string, string> = {
  Manhã: "08:00 às 12:00",
  Tarde: "12:00 às 18:00",
  Noite: "18:00 às 22:00",
};

export const ChildrenContent = () => {
  const [radioValue, setRadioValue] = useState(
    customizableContentOptions[0].title
  );

  const handleOnValueChange = (value: string) => {
    const selectedTitle = customizableContentOptions.find(
      (option) => option.value === value
    )?.title;
    if (selectedTitle) setRadioValue(selectedTitle);
  };

  return (
    <section className="flex flex-col items-center gap-4">
      <div className="mb-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/80 relative size-8 rounded-full">
            <Image
              src={hygraphLogo}
              fill
              alt="Logo Hygraph"
              className="p-1 invert"
            />
          </div>
          <h3 className="w-fit text-center font-semibold">
            Horario de Funcionamento
          </h3>
        </div>
        <RadioGroup
          defaultValue="option-one"
          className="flex flex-wrap justify-center gap-6"
          onValueChange={(value) => handleOnValueChange(value)}
        >
          {customizableContentOptions.map(({ icon: Icon, title, value }) => (
            <div key={title} className="flex items-center space-x-2">
              <RadioGroupItem value={value} id={value} />
              <Label
                htmlFor={value}
                className={`hover:text-primary cursor-pointer duration-300 ${radioValue === title && "text-primary"}`}
              >
                <Icon />
                {title}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Card className="w-full overflow-hidden p-0 pb-6 md:w-4/5">
        <CardHeader className="bg-primary/20 py-4">
          <CardTitle>Nosso Escritório</CardTitle>
          <CardDescription>Horário de Funcionamento:</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="flex items-center gap-4">
            <Clock />
            <span>
              {radioValue} - {scheduleMap[radioValue]}
            </span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
