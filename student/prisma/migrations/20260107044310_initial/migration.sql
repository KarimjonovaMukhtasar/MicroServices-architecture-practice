-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "field" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
