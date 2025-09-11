import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BanIcon, EyeIcon, PlusIcon, SearchIcon } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="py-6 p-6">
      <section className="">
        <Card>
          <CardHeader className="flex items-center justify-between border-b">
            <CardTitle>All Users</CardTitle>
            <div className="flex gap-2">
              <div
                className={cn(
                  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-fit min-w-0 rounded-md border bg-transparent px-3 items-center text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                )}
              >
                <SearchIcon className="text-muted-foreground" />
                <Input
                  className="outline-none! border-none! ring-0! shadow-none! py-0"
                  placeholder="Search.."
                />
              </div>
              <Button className="py-4 text-sm!">
                <PlusIcon />
                Add food item
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Users />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

const Users = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>JOINED</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 4 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1001}</TableCell>
              <TableCell>Liam Nickson</TableCell>
              <TableCell>liamnick@gmail.com</TableCell>
              <TableCell>12 June 2025</TableCell>
              <TableCell>
                <Badge variant={"success"}>Active</Badge>
              </TableCell>
              <TableCell>
                <Button variant={"ghost"}>
                  <EyeIcon />
                </Button>
                <Button variant={"ghost"}>
                  <BanIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
