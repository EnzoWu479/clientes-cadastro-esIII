using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ClientesCrud.Migrations
{
    /// <inheritdoc />
    public partial class revertbandeiraCartaoasPrimaryKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartaoCredito_BandeiraCartao_BandeiraNome",
                table: "CartaoCredito");

            migrationBuilder.DropIndex(
                name: "IX_CartaoCredito_BandeiraNome",
                table: "CartaoCredito");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BandeiraCartao",
                table: "BandeiraCartao");

            migrationBuilder.DropColumn(
                name: "BandeiraNome",
                table: "CartaoCredito");

            migrationBuilder.AddColumn<long>(
                name: "BandeiraId",
                table: "CartaoCredito",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "Id",
                table: "BandeiraCartao",
                type: "bigint",
                nullable: false,
                defaultValue: 0L)
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_BandeiraCartao",
                table: "BandeiraCartao",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_CartaoCredito_BandeiraId",
                table: "CartaoCredito",
                column: "BandeiraId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartaoCredito_BandeiraCartao_BandeiraId",
                table: "CartaoCredito",
                column: "BandeiraId",
                principalTable: "BandeiraCartao",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartaoCredito_BandeiraCartao_BandeiraId",
                table: "CartaoCredito");

            migrationBuilder.DropIndex(
                name: "IX_CartaoCredito_BandeiraId",
                table: "CartaoCredito");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BandeiraCartao",
                table: "BandeiraCartao");

            migrationBuilder.DropColumn(
                name: "BandeiraId",
                table: "CartaoCredito");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "BandeiraCartao");

            migrationBuilder.AddColumn<string>(
                name: "BandeiraNome",
                table: "CartaoCredito",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BandeiraCartao",
                table: "BandeiraCartao",
                column: "Nome");

            migrationBuilder.CreateIndex(
                name: "IX_CartaoCredito_BandeiraNome",
                table: "CartaoCredito",
                column: "BandeiraNome");

            migrationBuilder.AddForeignKey(
                name: "FK_CartaoCredito_BandeiraCartao_BandeiraNome",
                table: "CartaoCredito",
                column: "BandeiraNome",
                principalTable: "BandeiraCartao",
                principalColumn: "Nome",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
