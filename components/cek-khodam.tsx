"use client";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { RefreshCcw, Sparkles } from "lucide-react";
import BlurIn from "./ui/blur-in";
import { BorderBeam } from "./ui/border-beam";

export default function CheckKhodam() {
  const {
    messages,
    input,
    handleSubmit,
    setMessages,
    handleInputChange,
    isLoading,
    error,
  } = useChat({
    streamMode: "text",
  });

  const [refreshKey, setRefreshKey] = useState(0);

  const handleReset = () => {
    setMessages([]);
    setRefreshKey(prevKey => prevKey + 1);
  };

  if (error)
    return (
      <div className="flex flex-col items-center">
        <span className="text-rose-500 font-bold">{error.message}</span>
        <Button
          type="button"
          color="warning"
          startContent={
            <RefreshCcw
              size={18}
              className="group-hover:rotate-45 transition-all duration-300 ease-in-out"
            />
          }
          className="w-full font-semibold group"
          onClick={handleReset}
        >
          Ulangi
        </Button>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex items-center gap-x-2">
        <Sparkles size={24} className="animate-pulse" />
        <span>Memeriksa Oshi...</span>
      </div>
    );

  return (
    <Card className="min-w-[350px] max-w-[450px] relative">
      <CardHeader className="flex flex-col">
        {!error && !isLoading && messages.length > 0 && (
          <div className="flex-grow p-2">
            {messages.map((message, index) => {
              if (message.role === "assistant") {
                return (
                  <BlurIn
                    key={index}
                    word={JSON.parse(message.content).messages}
                  />
                );
              }
            })}
          </div>
        )}
        <CardBody className="grid grid-cols-1 gap-6 p-2">
          {!error && !isLoading && messages.length === 0 && (
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                key={refreshKey} // Add key to force re-render
                value={input}
                onChange={handleInputChange}
                required
                placeholder="Tuliskan nama kamu disini..."
                color="success"
                maxLength={50}
              />
              <Button
                type="submit"
                color="secondary"
                startContent={
                  <Sparkles size={18} className="group-hover:animate-pulse" />
                }
                className="w-full font-semibold group"
              >
                Check Oshi
              </Button>
            </form>
          )}

          {!error && !isLoading && messages.length > 0 && (
            <Button
              type="button"
              color="warning"
              startContent={
                <RefreshCcw
                  size={18}
                  className="group-hover:rotate-45 transition-all duration-300 ease-in-out"
                />
              }
              className="w-full font-semibold group"
              onClick={handleReset}
            >
              Ulangi
            </Button>
          )}
        </CardBody>
      </CardHeader>
      <BorderBeam size={150} />
    </Card>
  );
}
