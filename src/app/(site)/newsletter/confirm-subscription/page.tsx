import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import ConfirmNewsletterSubscriptionButton from "./ConfirmSubscriptionButton";

export default function VerifyEmailPage() {
  return (
    <main className="mx-auto flex min-h-[70svh] w-full max-w-md flex-col justify-center space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Confirm your Subscription
          </CardTitle>
          <CardDescription>
            Please click the button below to confirm your aubscription to our
            newsletter .
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Suspense fallback={<Skeleton className="h-12 w-full" />}>
            <ConfirmNewsletterSubscriptionButton />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}
