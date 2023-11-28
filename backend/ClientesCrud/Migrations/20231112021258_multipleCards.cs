using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClientesCrud.Migrations
{
    /// <inheritdoc />
    public partial class multipleCards : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Clientes_CartaoCredito_CartaoCreditoId",
                table: "Clientes");

            migrationBuilder.DropIndex(
                name: "IX_Clientes_CartaoCreditoId",
                table: "Clientes");

            migrationBuilder.DropColumn(
                name: "CartaoCreditoId",
                table: "Clientes");

            migrationBuilder.AddColumn<long>(
                name: "ClienteId",
                table: "CartaoCredito",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CartaoCredito_ClienteId",
                table: "CartaoCredito",
                column: "ClienteId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartaoCredito_Clientes_ClienteId",
                table: "CartaoCredito",
                column: "ClienteId",
                principalTable: "Clientes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartaoCredito_Clientes_ClienteId",
                table: "CartaoCredito");

            migrationBuilder.DropIndex(
                name: "IX_CartaoCredito_ClienteId",
                table: "CartaoCredito");

            migrationBuilder.DropColumn(
                name: "ClienteId",
                table: "CartaoCredito");

            migrationBuilder.AddColumn<long>(
                name: "CartaoCreditoId",
                table: "Clientes",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Clientes_CartaoCreditoId",
                table: "Clientes",
                column: "CartaoCreditoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Clientes_CartaoCredito_CartaoCreditoId",
                table: "Clientes",
                column: "CartaoCreditoId",
                principalTable: "CartaoCredito",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
