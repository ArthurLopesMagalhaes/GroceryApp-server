-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_store" INTEGER NOT NULL,
    "address" VARCHAR NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_store" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "price" REAL NOT NULL,
    "product_photo" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "rating" REAL NOT NULL,
    "store_photo" VARCHAR NOT NULL,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonials" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "password_hash" VARCHAR NOT NULL,
    "full_name" VARCHAR NOT NULL,
    "nickname" VARCHAR NOT NULL,
    "phone_number" VARCHAR NOT NULL,
    "gender" VARCHAR NOT NULL,
    "date_birth" DATE NOT NULL,
    "remember_me" BOOLEAN NOT NULL,
    "profile_photo" VARCHAR NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
