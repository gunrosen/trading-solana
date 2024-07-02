use anchor_lang::prelude::*;

declare_id!("5KAthXLCxvU7qWcK2yRKN83wgvzQgL9g9zLLnXYQEw5z");

#[program]
pub mod trading_solana {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
