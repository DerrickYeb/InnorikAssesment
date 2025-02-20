﻿namespace BookStoreApp.DAL.Entities;

public record User
{
    public Guid Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
}