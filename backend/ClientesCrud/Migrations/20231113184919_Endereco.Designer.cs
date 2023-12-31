﻿// <auto-generated />
using System;
using ClientesCrud.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ClientesCrud.Migrations
{
    [DbContext(typeof(ClienteContext))]
    [Migration("20231113184919_Endereco")]
    partial class Endereco
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ClientesCrud.Models.BandeiraCartao", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("BandeiraCartao");
                });

            modelBuilder.Entity("ClientesCrud.Models.CartaoCredito", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<long>("BandeiraId")
                        .HasColumnType("bigint");

                    b.Property<long?>("ClienteId")
                        .HasColumnType("bigint");

                    b.Property<string>("Cvv")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("NomeTitular")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Numero")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("Preferencial")
                        .HasColumnType("boolean");

                    b.Property<string>("Validade")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("BandeiraId");

                    b.HasIndex("ClienteId");

                    b.ToTable("CartaoCredito");
                });

            modelBuilder.Entity("ClientesCrud.Models.Cidade", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<long>("EstadoId")
                        .HasColumnType("bigint");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("EstadoId");

                    b.ToTable("Cidade");
                });

            modelBuilder.Entity("ClientesCrud.Models.Endereco", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Bairro")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Cep")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("CidadeId")
                        .HasColumnType("bigint");

                    b.Property<long?>("ClienteId")
                        .HasColumnType("bigint");

                    b.Property<long?>("ClienteId1")
                        .HasColumnType("bigint");

                    b.Property<long?>("ClienteId2")
                        .HasColumnType("bigint");

                    b.Property<string>("Logradouro")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Numero")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Observacoes")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("TipoLogradouroId")
                        .HasColumnType("bigint");

                    b.Property<int>("TipoResidencia")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CidadeId");

                    b.HasIndex("ClienteId");

                    b.HasIndex("ClienteId1");

                    b.HasIndex("ClienteId2");

                    b.HasIndex("TipoLogradouroId");

                    b.ToTable("Endereco");
                });

            modelBuilder.Entity("ClientesCrud.Models.Estado", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("PaisId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("PaisId");

                    b.ToTable("Estado");
                });

            modelBuilder.Entity("ClientesCrud.Models.Log", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<DateTime>("DataRegistro")
                        .HasColumnType("timestamp with time zone");

                    b.Property<long>("UsuarioResponsavelId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("UsuarioResponsavelId");

                    b.ToTable("Logs");
                });

            modelBuilder.Entity("ClientesCrud.Models.Pais", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Pais");
                });

            modelBuilder.Entity("ClientesCrud.Models.Telefone", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Ddd")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Numero")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Telefone");
                });

            modelBuilder.Entity("ClientesCrud.Models.TipoLogradouro", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("TipoLogradouro");
                });

            modelBuilder.Entity("ClientesCrud.Models.Usuario", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Usuario");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Usuario");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("ClientesCrud.Models.Cliente", b =>
                {
                    b.HasBaseType("ClientesCrud.Models.Usuario");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("timestamp with time zone");

                    b.Property<long>("TelefoneId")
                        .HasColumnType("bigint");

                    b.HasIndex("TelefoneId");

                    b.HasDiscriminator().HasValue("Cliente");
                });

            modelBuilder.Entity("ClientesCrud.Models.CartaoCredito", b =>
                {
                    b.HasOne("ClientesCrud.Models.BandeiraCartao", "Bandeira")
                        .WithMany()
                        .HasForeignKey("BandeiraId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ClientesCrud.Models.Cliente", null)
                        .WithMany("CartaoCredito")
                        .HasForeignKey("ClienteId");

                    b.Navigation("Bandeira");
                });

            modelBuilder.Entity("ClientesCrud.Models.Cidade", b =>
                {
                    b.HasOne("ClientesCrud.Models.Estado", "Estado")
                        .WithMany()
                        .HasForeignKey("EstadoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Estado");
                });

            modelBuilder.Entity("ClientesCrud.Models.Endereco", b =>
                {
                    b.HasOne("ClientesCrud.Models.Cidade", "Cidade")
                        .WithMany()
                        .HasForeignKey("CidadeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ClientesCrud.Models.Cliente", null)
                        .WithMany("EnderecosCobranca")
                        .HasForeignKey("ClienteId");

                    b.HasOne("ClientesCrud.Models.Cliente", null)
                        .WithMany("EnderecosEntrega")
                        .HasForeignKey("ClienteId1");

                    b.HasOne("ClientesCrud.Models.Cliente", null)
                        .WithMany("EnderecosResidencial")
                        .HasForeignKey("ClienteId2");

                    b.HasOne("ClientesCrud.Models.TipoLogradouro", "TipoLogradouro")
                        .WithMany()
                        .HasForeignKey("TipoLogradouroId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cidade");

                    b.Navigation("TipoLogradouro");
                });

            modelBuilder.Entity("ClientesCrud.Models.Estado", b =>
                {
                    b.HasOne("ClientesCrud.Models.Pais", "Pais")
                        .WithMany()
                        .HasForeignKey("PaisId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pais");
                });

            modelBuilder.Entity("ClientesCrud.Models.Log", b =>
                {
                    b.HasOne("ClientesCrud.Models.Usuario", "UsuarioResponsavel")
                        .WithMany()
                        .HasForeignKey("UsuarioResponsavelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("UsuarioResponsavel");
                });

            modelBuilder.Entity("ClientesCrud.Models.Cliente", b =>
                {
                    b.HasOne("ClientesCrud.Models.Telefone", "Telefone")
                        .WithMany()
                        .HasForeignKey("TelefoneId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Telefone");
                });

            modelBuilder.Entity("ClientesCrud.Models.Cliente", b =>
                {
                    b.Navigation("CartaoCredito");

                    b.Navigation("EnderecosCobranca");

                    b.Navigation("EnderecosEntrega");

                    b.Navigation("EnderecosResidencial");
                });
#pragma warning restore 612, 618
        }
    }
}
