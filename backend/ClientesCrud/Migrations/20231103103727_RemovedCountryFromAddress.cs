using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClientesCrud.Migrations
{
    /// <inheritdoc />
    public partial class RemovedCountryFromAddress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Pais_PaisId",
                table: "Endereco");

            migrationBuilder.DropIndex(
                name: "IX_Endereco_PaisId",
                table: "Endereco");

            migrationBuilder.DropColumn(
                name: "PaisId",
                table: "Endereco");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "PaisId",
                table: "Endereco",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Endereco_PaisId",
                table: "Endereco",
                column: "PaisId");

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Pais_PaisId",
                table: "Endereco",
                column: "PaisId",
                principalTable: "Pais",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
