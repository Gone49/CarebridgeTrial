"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

export async function createUser(data: RegisterInputProps) {
  try {
    // console.log(data);
    throw new
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went wrong",
    };
  }
}