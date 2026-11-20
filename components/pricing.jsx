"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "forever",
    description: "Perfect for testing our platform and booking your first consultation",
    credits: "2 Consultation Credits",
    features: [
      "2 free consultation credits on signup",
      "Full doctor search & filters",
      "In-browser HD video calls",
      "Medicine reminder tracker",
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Standard Plan",
    price: "$29",
    period: "per month",
    description: "Ideal for individuals and regular checkups with specialists",
    credits: "10 Consultation Credits / mo",
    features: [
      "10 consultation credits every month",
      "5 full doctor consultations",
      "Priority doctor slot booking",
      "Doctor notes & prescription history",
      "Email & SMS notifications",
    ],
    buttonText: "Upgrade to Standard",
    buttonVariant: "default",
    popular: true,
  },
  {
    name: "Premium Family",
    price: "$59",
    period: "per month",
    description: "Complete healthcare coverage for the whole family",
    credits: "24 Consultation Credits / mo",
    features: [
      "24 consultation credits every month",
      "12 specialist consultations",
      "Caregiver alternate emergency alerts",
      "Priority 24/7 doctor availability",
      "Credits never expire",
    ],
    buttonText: "Get Premium",
    buttonVariant: "outline",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`relative flex flex-col justify-between border transition-all duration-300 hover:border-emerald-700/60 ${
            plan.popular
              ? "bg-gradient-to-b from-emerald-950/40 via-card to-card border-emerald-500/60 shadow-xl shadow-emerald-950/30 scale-105"
              : "bg-card border-emerald-900/30"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-emerald-600 text-white font-semibold px-3 py-1">
                Most Popular
              </Badge>
            </div>
          )}
          <CardHeader className="pt-8">
            <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
            <CardDescription className="text-muted-foreground mt-2 min-h-[40px]">
              {plan.description}
            </CardDescription>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">{plan.price}</span>
              <span className="text-sm text-muted-foreground">/{plan.period}</span>
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/40 text-emerald-400">
                {plan.credits}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {plan.features.map((feature, fIndex) => (
              <div key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter className="pt-6">
            <Button
              asChild
              className={`w-full ${
                plan.popular
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "border-emerald-700/30 hover:bg-muted"
              }`}
              variant={plan.buttonVariant}
            >
              <Link href="/onboarding">{plan.buttonText}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Pricing;
