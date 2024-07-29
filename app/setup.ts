import 'dotenv/config'
require('dotenv').config({path:__dirname + '/.env'})
import * as anchor from "@project-serum/anchor";
// import {
//     createMintToInstruction,
//     getAssociatedTokenAddress,
//     getAssociatedTokenAddressSync,
//     getOrCreateAssociatedTokenAccount,
//     TOKEN_2022_PROGRAM_ID,
//     TOKEN_PROGRAM_ID,
// } from "@solana/spl-token";
import { BN, Program } from "@project-serum/anchor";
import bs58 from "bs58";

export async function setup(isMainnet: boolean = false) {
    const connection = new anchor.web3.Connection(anchor.web3.clusterApiUrl(isMainnet ? "mainnet-beta" : "devnet"))
    // const balance = await connection.getBalance(new anchor.web3.PublicKey('EN9eAJWxz1oFvBGAXVh9tzKWitxyyJEdyrqgwzT3K6GM'));
    // anchor.web3.Keypair.fromSecretKey(new Uint8Array(require(path_operator_key)))
    let secretKey = bs58.decode(`${process.env.ADMIN_PRIVATE_KEY}`);
    const adminWallet = anchor.web3.Keypair.fromSecretKey(secretKey)
    console.log(`PublicKey: ${adminWallet.publicKey} \n SOL balance: ${await connection.getBalance(adminWallet.publicKey)}`)
}

setup(false)