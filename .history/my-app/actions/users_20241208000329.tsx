"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

export async function createUser(data: RegisterInputProps) {
  try {
    // console.log(data);
    thro
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went wrong",
    };
  }
}
