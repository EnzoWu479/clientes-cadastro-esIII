using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ClientesCrud.Migrations
{
    /// <inheritdoc />
    public partial class removeLog : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartaoCredito_Usuario_ClienteId",
                table: "CartaoCredito");

            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Usuario_ClienteId",
                table: "Endereco");

            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Usuario_ClienteId1",
                table: "Endereco");

            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Usuario_ClienteId2",
                table: "Endereco");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuario_Telefone_TelefoneId",
                table: "Usuario");

            migrationBuilder.DropTable(
                name: "Logs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Usuario");

            migrationBuilder.RenameTable(
                name: "Usuario",
                newName: "Clientes");

            migrationBuilder.RenameIndex(
                name: "IX_Usuario_TelefoneId",
                table: "Clientes",
                newName: "IX_Clientes_TelefoneId");

            migrationBuilder.AlterColumn<long>(
                name: "TelefoneId",
                table: "Clientes",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Genero",
                table: "Clientes",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateOnly>(
                name: "DataNascimento",
                table: "Clientes",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1),
                oldClrType: typeof(DateOnly),
                oldType: "date",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Cpf",
                table: "Clientes",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Clientes",
                table: "Clientes",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CartaoCredito_Clientes_ClienteId",
                table: "CartaoCredito",
                column: "ClienteId",
                principalTable: "Clientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Clientes_Telefone_TelefoneId",
                table: "Clientes",
                column: "TelefoneId",
                principalTable: "Telefone",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Clientes_ClienteId",
                table: "Endereco",
                column: "ClienteId",
                principalTable: "Clientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Clientes_ClienteId1",
                table: "Endereco",
                column: "ClienteId1",
                principalTable: "Clientes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Clientes_ClienteId2",
                table: "Endereco",
                column: "ClienteId2",
                principalTable: "Clientes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartaoCredito_Clientes_ClienteId",
                table: "CartaoCredito");

            migrationBuilder.DropForeignKey(
                name: "FK_Clientes_Telefone_TelefoneId",
                table: "Clientes");

            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Clientes_ClienteId",
                table: "Endereco");

            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Clientes_ClienteId1",
                table: "Endereco");

            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Clientes_ClienteId2",
                table: "Endereco");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Clientes",
                table: "Clientes");

            migrationBuilder.RenameTable(
                name: "Clientes",
                newName: "Usuario");

            migrationBuilder.RenameIndex(
                name: "IX_Clientes_TelefoneId",
                table: "Usuario",
                newName: "IX_Usuario_TelefoneId");

            migrationBuilder.AlterColumn<long>(
                name: "TelefoneId",
                table: "Usuario",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<int>(
                name: "Genero",
                table: "Usuario",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "DataNascimento",
                table: "Usuario",
                type: "date",
                nullable: true,
                oldClrType: typeof(DateOnly),
                oldType: "date");

            migrationBuilder.AlterColumn<string>(
                name: "Cpf",
                table: "Usuario",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Usuario",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Logs",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UsuarioResponsavelId = table.Column<long>(type: "bigint", nullable: false),
                    DataRegistro = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Logs_Usuario_UsuarioResponsavelId",
                        column: x => x.UsuarioResponsavelId,
                        principalTable: "Usuario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Logs_UsuarioResponsavelId",
                table: "Logs",
                column: "UsuarioResponsavelId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartaoCredito_Usuario_ClienteId",
                table: "CartaoCredito",
                column: "ClienteId",
                principalTable: "Usuario",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Usuario_ClienteId",
                table: "Endereco",
                column: "ClienteId",
                principalTable: "Usuario",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Usuario_ClienteId1",
                table: "Endereco",
                column: "ClienteId1",
                principalTable: "Usuario",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Usuario_ClienteId2",
                table: "Endereco",
                column: "ClienteId2",
                principalTable: "Usuario",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuario_Telefone_TelefoneId",
                table: "Usuario",
                column: "TelefoneId",
                principalTable: "Telefone",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
