use anchor_lang::prelude::*;

declare_id!("5KAthXLCxvU7qWcK2yRKN83wgvzQgL9g9zLLnXYQEw5z");

#[program]
pub mod trading_solana {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
    pub fn set_data(ctx: Context<SetData>, data: u64) -> Result<()> {
        ctx.accounts.my_account.data = data;
        Ok(())
    }

    pub fn get_data(ctx: Context<SetData>) -> Result<u64> {
        Ok(ctx.accounts.my_account.data)
    }

}

#[derive(Accounts)]
pub struct Initialize {}


#[account]
#[derive(Default)]
pub struct MyAccount {
    data: u64
}

#[derive(Accounts)]
pub struct SetData<'info> {
    #[account(mut)]
    pub my_account: Account<'info, MyAccount>
}