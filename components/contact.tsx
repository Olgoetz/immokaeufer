"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Mail, PhoneCall } from "lucide-react";
import { CAESAR_MOBILE, DOMAIN } from "@/lib/constants";

import Link from "next/link";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z.object({
  Nachname: z
    .string({ message: "Bitte geben sie mindenstens 2 Zeichen ein!" })
    .min(2)
    .max(50),
  Vorname: z
    .string({ message: "Bitte geben sie mindenstens 2 Zeichen ein!" })
    .min(2)
    .max(50),
  Email: z
    .string()
    .email({ message: "Bitte geben Sie ein gültige Emaildresse an!" }),
  Telefon: z
    .string()
    .regex(phoneRegex, "Bitte geben Sie ein gültige Telefonnummer an!")
    .optional(),
  Firma: z.string().min(2).max(50).optional(),
  Nachricht: z
    .string({
      message: "Bitte geben Sie Ihre Nachricht mit max. 500 Zeichen ein!",
    })
    .min(2)
    .max(500),
  Captcha: z.string(),
});

function Contact() {
  const [captchaValue1, setCaptchaValue1] = useState<number>(
    Math.floor(Math.random() * 10)
  );
  const [captchaValue2, setCaptchaValue2] = useState<number>(
    Math.floor(Math.random() * 10)
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nachname: "",
      Vorname: "",
      Email: "",
      Firma: "",
      Captcha: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const correctAnswer = captchaValue1 + captchaValue2;
    if (parseInt(form.getValues().Captcha) !== correctAnswer) {
      alert("CAPTCHA Antwort ist falsch!");
      return;
    }
  }

  return (
    <main id="kontakt" className="pb-10">
      <div className="container">
        <h2 className="text-5xl text-green-400 font-bold uppercase py-10 text-center">
          Kontakt
        </h2>
        <div className="pb-10">
          <h3 className="text-3xl text-center leading-relaxed">
            Wir freuen uns auf Ihr Angebot
          </h3>
          <p className="text-xl text-center">Sprechen Sie uns jederzeit an!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 max-w-[1100px] mx-auto text-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="Nachname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachname*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Vorname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vorname*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="foo@email.com" />
                      </FormControl>
                      {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Telefon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="+49 123456" />
                      </FormControl>
                      {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Firma"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Firma</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Nachricht"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Ihre Nachricht an uns*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="Nachricht"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel> </FormLabel>
                    {/* <FormControl>
                      <Input {...field} />
                    </FormControl> */}
                    Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                    stimme zu, dass meine Angaben und Daten zur Beantwortung
                    meiner Anfrage elekronisch erhoben und gespeichert werden.
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Captcha"
                render={({ field }) => (
                  <FormItem className="">
                    <div className="flex items-center justify-start gap-x-4">
                      <FormLabel>
                        {" "}
                        Was ist {captchaValue1} + {captchaValue2}?:
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="w-[50px] " />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="p-4 w-full md:w-[150px] uppercase mt-4 bg-transparent text-black border border-black hover:bg-green-400 rounded-none"
                type="submit"
              >
                Senden
              </Button>

              <p className="text-xs mt-4">*: Pflichtangaben</p>
            </form>
          </Form>

          <div className="flex flex-col justify-center bg-slate-100 rounded-lg text-sm">
            <div className="flex flex-col items-center justify-center gap-2 p-8">
              <PhoneCall className="size-10" />
              <p>Rufen Sie uns gerne an!</p>
              <p>Caesar Jaworkski, Mobil: {CAESAR_MOBILE}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-8">
              <Mail className="size-10" />
              <p>Schreiben Sie uns gerne eine E-Mail!</p>
              <Link href={`mailto:angebote@${DOMAIN}`}>angebote@{DOMAIN}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
